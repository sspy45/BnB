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

ActiveRecord::Schema.define(version: 20170518004826) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer  "location_id", null: false
    t.datetime "check_in",    null: false
    t.datetime "check_out",   null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "pet_id",      null: false
  end

  create_table "hostings", force: :cascade do |t|
    t.integer  "location_id", null: false
    t.integer  "pet_type_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string   "title",           null: false
    t.string   "description",     null: false
    t.string   "street_address1", null: false
    t.string   "street_address2", null: false
    t.string   "city",            null: false
    t.string   "state",           null: false
    t.integer  "zip",             null: false
    t.float    "lat"
    t.float    "lng"
    t.integer  "owner_id",        null: false
    t.boolean  "archived",        null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["owner_id"], name: "index_locations_on_owner_id", using: :btree
  end

  create_table "pet_types", force: :cascade do |t|
    t.string   "species",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pets", force: :cascade do |t|
    t.integer  "owner_id",   null: false
    t.integer  "type_id",    null: false
    t.string   "name",       null: false
    t.string   "desc"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.text     "body",        null: false
    t.integer  "rating",      null: false
    t.integer  "user_id",     null: false
    t.integer  "pet_id"
    t.integer  "location_id"
    t.string   "review_type", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest"
    t.string   "session_token"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "first_name"
    t.string   "last_name"
    t.string   "phone"
    t.string   "email"
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
