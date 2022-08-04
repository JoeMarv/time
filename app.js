stats =[
    {
      "title": "Work",
      "classname": "work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "classname": "play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "classname": "study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "classname": "exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "classname": "social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "classname": "self-care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

 
//map and return template of the particular part

const btns = document.querySelectorAll('.timeframe')
const main = document.querySelector('.main')
const daily = document.querySelector('.daily')
const weekly = document.querySelector('.weekly')
const monthly = document.querySelector('.monthly')


btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        btns.forEach(function(item) {
            if (item !== btn) {
                item.classList.remove('active')
            } 
        })

        btn.classList.add('active')
    })
})



window.addEventListener('DOMContentLoaded', function() {
  displayDailyTime(stats)
})


btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    if(daily.classList.contains('active')) {
      displayDailyTime(stats)
    }

    else if(weekly.classList.contains('active')) {
      displayWeeklyTime(stats)
    }

    else {
      displayMonthlyTime(stats)
    }
  })
})



function displayDailyTime(dailyItems) {
    let displayDaily = dailyItems.map(function(item) {
        const present = item.timeframes.daily.current
        const past = item.timeframes.daily.previous
        const title = item.title
        const className = item.classname
 
        return `<section class="section ${className}">
                    <div class="section-container">
                    <div class="section-header">
                        <span>${title}</span>
                        <button class="ellipses-icon"><img src="images/icon-ellipsis.svg"></button>
                    </div>
            
                    <div class="section-main">
                        <div class="present">
                        <span class="present-time">${present}hrs</span>
                        </div>
            
                        <div class="past">
                        <span class="past-time">Yesterday - ${past}hrs</span>
                        </div>
                    </div>
                    </div>
                </section>`
    })

    displayDaily = displayDaily.join('')

    main.innerHTML = displayDaily
}


function displayWeeklyTime(weeklyItems) {
    let displayWeekly = weeklyItems.map(function(item) {
        const present = item.timeframes.weekly.current
        const past = item.timeframes.weekly.previous
        const title = item.title
        const className = item.classname
 
        return `<section class="section ${className}">
                    <div class="section-container">
                    <div class="section-header">
                        <span>${title}</span>
                        <button class="ellipses-icon"><img src="images/icon-ellipsis.svg"></button>
                    </div>
            
                    <div class="section-main">
                        <div class="present">
                        <span class="present-time">${present}hrs</span>
                        </div>
            
                        <div class="past">
                        <span class="past-time">Last Week - ${past}hrs</span>
                        </div>
                    </div>
                    </div>
                </section>`
    })

    displayWeekly = displayWeekly.join('')

    main.innerHTML = displayWeekly
}


function displayMonthlyTime(monthlyItems) {
    let displayMonthly = monthlyItems.map(function(item) {
        const present = item.timeframes.monthly.current
        const past = item.timeframes.monthly.previous
        const title = item.title
        const className = item.classname
 
        return `<section class="section ${className}">
                    <div class="section-container">
                    <div class="section-header">
                        <span>${title}</span>
                        <button class="ellipses-icon"><img src="images/icon-ellipsis.svg"></button>
                    </div>
            
                    <div class="section-main">
                        <div class="present">
                        <span class="present-time">${present}hrs</span>
                        </div>
            
                        <div class="past">
                        <span class="past-time">Last Month - ${past}hrs</span>
                        </div>
                    </div>
                    </div>
                </section>`
    })

    displayMonthly = displayMonthly.join('')

    main.innerHTML = displayMonthly
}