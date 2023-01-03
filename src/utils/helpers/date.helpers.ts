export function getMilisecondsDate(dateString?:string , isEndDate:Boolean = false) {
    let vl = dateString!.split('-')
    var date = new Date(
      `${vl[1]}/${vl[2]}/${vl[0]} ${
        isEndDate === true ? '23:59:59' : '00:00:00'
      }`,
    ) // some mock date
    var milliseconds = date.getTime()
    return milliseconds
  }

  export function addDays(date: Date, days: number) {
    return date.getTime() + (86400000 * days)
  }

  export function RetunrOnlydate (miliseconds:number, splitString = '/') {
    const date = new Date(miliseconds)
    const formatDate = `${
      date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
    }${splitString}${
      date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    }${splitString}${date.getFullYear()}`
    return formatDate
  }
  export function milliToDTInp (milisecons:number) {
    let datepase = RetunrOnlydate(milisecons)
    let date = datepase.split('/')
    let newDate = `${date[2]}-${date[1]}-${date[0]}`
    return newDate
  }

  export function dtTomInpRentDtEnd(date: Date) {
    let dateadd = addDays(date, 5)
    return milliToDTInp(dateadd)
  }