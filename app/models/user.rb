class User < ApplicationRecord
  has_many :books
  has_many :tasks
  has_many :appointments

  has_secure_password
end
