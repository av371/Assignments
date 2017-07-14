class RenameSkillsIdToSkillId < ActiveRecord::Migration[5.1]
  def change
  	rename_column :employee_skill_lists, :skills_id, :skill_id
  end
end
