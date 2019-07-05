# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_07_05_045615) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "spots", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
    t.integer "num_guests"
    t.integer "num_bedrooms"
    t.integer "num_beds"
    t.integer "num_baths"
    t.string "listing_type"
    t.float "price", null: false
    t.string "location", null: false
    t.string "loc_detail"
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.integer "host_id", null: false
    t.boolean "wifi", default: true
    t.boolean "washer", default: true
    t.boolean "tv", default: true
    t.boolean "elevator", default: true
    t.boolean "parking", default: true
    t.boolean "kitchen", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["host_id"], name: "index_spots_on_host_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "fname"
    t.text "bio"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
