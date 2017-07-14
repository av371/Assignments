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

ActiveRecord::Schema.define(version: 20170622062822) do

  create_table "employee_skill_lists", force: :cascade do |t|
    t.integer "employee_id"
    t.integer "skill_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["employee_id"], name: "index_employee_skill_lists_on_employee_id"
    t.index ["skill_id"], name: "index_employee_skill_lists_on_skill_id"
  end

  create_table "employees", force: :cascade do |t|
    t.string "name"
    t.string "project"
    t.string "tech_lead"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "team_lead_id"
    t.integer "project_id"
    t.index ["project_id"], name: "index_employees_on_project_id"
    t.index ["team_lead_id"], name: "index_employees_on_team_lead_id"
  end

  create_table "projects", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "project_name"
  end

  create_table "skills", force: :cascade do |t|
    t.string "skill"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "team_leads", force: :cascade do |t|
    t.string "team_lead_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
