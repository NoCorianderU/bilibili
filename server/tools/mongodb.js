
const MongoClient = require('mongodb').MongoClient

const config = require('./config.js')

class MongoDB {

  static getDB() {
    if(!MongoDB.dbClient) {
      MongoDB.dbClient =  new MongoDB()
    }
    return MongoDB.dbClient
  }

  constructor() {
    this.dbClient = ''
    this.connect()
  }

  connect() {
    return new Promise((resolve, reject) => {
      if(!this.dbClient) {
        MongoClient.connect(config.url, (err, client) => {
          if(err) {
            return reject(err)
          }
          resolve(client.db(config.dbName))
          console.log("数据库连接成功~~")
          this.dbClient = client.db(config.dbName)
        });
      }else {
        resolve(this.dbClient)
      }
    })
  }

  find(collection ,json) {
    return new Promise((result, reject) => {
      this.connect().then((db) => {
          let data = db.collection(collection).find(json)
          data.toArray((err, docs) => {
            if(err) {
              return reject(err)
            }
            result(docs)
          })
      })
    })
  }

  insertOne(collection ,json) {
    return new Promise((result, reject) => {
      this.connect().then((db) => {
          let data = db.collection(collection).insertOne(json, (err, res) => {
            if(err) {
              return reject(err)
            }
            result(res)
        })
      })
    })
  }

}
module.exports = MongoDB
