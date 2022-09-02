
ActiveRecord::Schema[7.0].define(version: 2022_09_01_171429) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  # creating the users table
  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
