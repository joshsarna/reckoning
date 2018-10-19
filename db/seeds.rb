User.create!([
  {name: "Josh", email: "josh@gmail.com", password_digest: "$2a$10$Hfr9DzO7d0IGP3entnnNo.zDF8j7gnpwe/fpKDqZihiD1WotTxGMO"},
  {name: "Maria", email: "maria@gmail.com", password_digest: "$2a$10$69nXZijDoHx5WNcUMskx8O/.L85YwGc6bQja0mu9GlZZ5QLUDuwoK"},
  {name: "Jake", email: "jake", password_digest: "$2a$10$7A6NYRFJPEZ2Or1T90QOtuVp5bi8io7.rpBRrdPNNt05mR5hnza.y"}
])
Appointment.create!([
  {name: "Array-of-sunshine", start_time: "2018-10-21 07:00:00", end_time: "2018-10-21 10:30:00", location: "Remote", description: "TAship", user_id: 1},
  {name: "Array-of-sunshine", start_time: "2018-10-21 11:30:00", end_time: "2018-10-21 15:00:00", location: "Remote", description: "TAship", user_id: 1},
  {name: "Array-of-sunshine", start_time: "2018-10-23 16:00:00", end_time: "2018-10-23 19:30:00", location: "Remote", description: "TAship", user_id: 1},
  {name: "Array-of-sunshine", start_time: "2018-10-24 16:00:00", end_time: "2018-10-24 19:30:00", location: "Remote", description: "TAship", user_id: 1},
  {name: "AWS Concepts Course", start_time: "2018-10-19 11:00:00", end_time: "2018-10-19 13:00:00", location: "Remote", description: "", user_id: 1},
  {name: "AWS Fundamentals Course", start_time: "2018-10-20 11:00:00", end_time: "2018-10-20 16:00:00", location: "Remote", description: "", user_id: 1},
  {name: "AWS Fundamentals Course", start_time: "2018-10-22 10:00:00", end_time: "2018-10-22 15:00:00", location: "Remote", description: "", user_id: 1},
  {name: "Grade Week 2 Deliberate Practice", start_time: "2018-10-19 14:00:00", end_time: "2018-10-19 17:00:00", location: "Remote", description: "TAship", user_id: 1},
  {name: "Ed's website", start_time: "2018-10-23 10:00:00", end_time: "2018-10-23 15:00:00", location: "Remote", description: "", user_id: 1},
  {name: "Ed's Website", start_time: "2018-10-24 10:00:00", end_time: "2018-10-24 15:00:00", location: "Remote", description: "", user_id: 1},
  {name: "Ed's website", start_time: "2018-10-25 10:00:00", end_time: "2018-10-25 15:00:00", location: "Remote", description: "", user_id: 1},
  {name: "Ruby-dooby-doo", start_time: "2018-10-18 16:00:00", end_time: "2018-10-18 19:00:00", location: "Remote", description: "Work group", user_id: 1},
  {name: "Ruby-dooby-doo", start_time: "2018-10-22 16:00:00", end_time: "2018-10-22 19:00:00", location: "Remote", description: "Work group", user_id: 1},
  {name: "Ruby-dooby-doo", start_time: "2018-10-25 16:00:00", end_time: "2018-10-25 19:00:00", location: "Remote", description: "Work group", user_id: 1},
  {name: "Concept map LawnNinja", start_time: "2018-10-20 17:00:00", end_time: "2018-10-20 18:00:00", location: "Remote", description: "Work Group", user_id: 1}
])
Book.create!([
  {name: "The Sparrow", author: "Mary Doria Russell", due_date: "2018-11-08 00:00:00", completed_status: false, pages: 483, user_id: 1},
  {name: "Needful Things", author: "Stephen King", due_date: "2018-10-31 00:00:00", completed_status: false, pages: 943, user_id: 1},
  {name: "The Hate U Give", author: "Angie Tomas", due_date: "2018-10-22 00:00:00", completed_status: false, pages: 444, user_id: 1},
  {name: "Accessory to War", author: "Neil deGrasse Tyson & Avis Lange", due_date: "2018-12-31 00:00:00", completed_status: false, pages: 404, user_id: 1},
  {name: "If Beale Street Could Talk", author: "James Baldwin", due_date: "2018-11-03 00:00:00", completed_status: false, pages: 197, user_id: 1},
  {name: "The Telling", author: "Ursula K Le Guin", due_date: "2018-10-23 00:00:00", completed_status: false, pages: 264, user_id: 1},
  {name: "The Unwritten Rules of the Highly Effective Job Search", author: "Orville Pierson", due_date: "2018-10-29 00:00:00", completed_status: false, pages: 278, user_id: 1},
  {name: "The Wind's Twelve Quarters", author: "Ursula K Le Guin", due_date: "2018-11-04 00:00:00", completed_status: false, pages: 303, user_id: 1},
  {name: "Black Klansman", author: "Ron Stallworth", due_date: "2018-11-01 00:00:00", completed_status: false, pages: 179, user_id: 1},
  {name: "The Birthday of the World", author: "Ursula K Le Guin", due_date: "2018-11-07 00:00:00", completed_status: false, pages: 362, user_id: 1},
  {name: "The Armageddon Rag", author: "George R. R. Martin", due_date: "2018-11-05 00:00:00", completed_status: false, pages: 340, user_id: 1},
  {name: "The Robots of Gotham", author: "Todd McAulty", due_date: "2018-11-02 00:00:00", completed_status: false, pages: 675, user_id: 1},
  {name: "The New World of Mr Tompkins", author: "George Gamow & Russell Stannard", due_date: "2018-10-23 00:00:00", completed_status: false, pages: 248, user_id: 1}
])
Task.create!([
  {name: "Finish edsarna.com", due_date: "2018-10-30 00:00:00", completed_status: false, user_id: 1},
  {name: "Grade Week 2 Deliberate Practice", due_date: "2018-10-20 00:00:00", completed_status: false, user_id: 1},
  {name: "Finish AWS Concepts Course", due_date: "2018-10-19 00:00:00", completed_status: false, user_id: 1},
  {name: "Finish AWS Fundamentals Course", due_date: "2018-10-24 00:00:00", completed_status: false, user_id: 1},
  {name: "Update TILs page on personal website", due_date: "2018-10-26 00:00:00", completed_status: false, user_id: 1},
  {name: "Update personal website w/ picture and further projects", due_date: "2018-10-26 00:00:00", completed_status: false, user_id: 1},
  {name: "Grade Week 3 Deliberate Practice", due_date: "2018-10-23 00:00:00", completed_status: false, user_id: 1},
  {name: "Grade Week 4 Deliberate Practice", due_date: "2018-10-28 00:00:00", completed_status: false, user_id: 1},
  {name: "Check Car Registration", due_date: "2018-10-19 00:00:00", completed_status: true, user_id: 1}
])
