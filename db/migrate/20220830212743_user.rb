class User < ActiveRecord::Migration[7.0]
  def change
    create_table :user do |t|
      t.string :name
      t.string :username
      t.string :password_digest
      
      t.timestamps
    end
  end
end
