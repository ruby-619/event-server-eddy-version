class Event {
  constructor(id,eventId,eventName,eventSubtitle, eventDate, eventDescription, eventImg,eventPrice,eventCategory,created_at,updated_at) {
    this.id = 0
    this.eventId=eventId
    this.eventName = eventName
    this.eventSubtitle=eventSubtitle
    this.eventDate = eventDate
    this.eventDescription = eventDescription
    this.eventImg=[]
    this.eventPrice = eventPrice
    this.eventCategory =eventCategory
    this.created_at=created_at
    this.updated_at=updated_at
    
  }

  addEventSQL() {
    let sql = `INSERT INTO Event(eventName, eventDate, eventDescription, eventPrice, login, createdDate) \
                   VALUES('${this.eventName}', '${this.eventDate}', '${this.eventDescription}', '${this.eventPrice}', 0, NOW())`
    return sql
  }

  updateEventByIdSQL(id) {
    let sql = `UPDATE EVENT \
               SET eventName = '${this.eventName}', eventDate = '${this.eventDate}', eventDescription = '${this.eventDescription}', eventPrice = '${this.eventPrice}', login = ${this.login} \
               WHERE id =  ${id}`
    return sql
  }

  // static是與實例化無關
  static getEventByIdSQL(id) {
    let sql = `SELECT * FROM EVENT WHERE id = ${id}`
    return sql
  }

  // login用
  getUserUserByUsernameAndPasswordSQL() {
    let sql = `SELECT * FROM USERS WHERE username = '${this.username}' AND password = '${this.password}' LIMIT 0,1`
    return sql
  }

  // static是與實例化無關
  static getEventByQuerySQL(query) {
    const where = []

    if (query.eventName) where.push(`eventName = '${query.eventName}'`)
    if (query.eventDate) where.push(`eventDate = '${query.eventDate}'`)
    if (query.eventDescription) where.push(`eventDescription = '${query.eventDescription}'`)

    let sql = ''

    if (where.length) sql = `SELECT * FROM EVENT WHERE ` + where.join(' AND ')
    else sql = `SELECT * FROM EVENT`

    return sql
  }

  static deleteEventByIdSQL(id) {
    let sql = `DELETE FROM EVENT WHERE ID = ${id}`
    return sql
  }
  
  

  static getAllEventSQL() {
    let sql = `SELECT * FROM event`
    return sql
  }

  //測試成功：分類
  static getCategoryEventSQL() {
    let sql = `SELECT * FROM EVENT WHERE \`eventCategory\` LIKE '%手作%'`
    return sql
  }

  

}


//export default User
module.exports = Event
