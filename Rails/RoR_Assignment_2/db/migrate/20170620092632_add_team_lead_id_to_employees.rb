class AddTeamLeadIdToEmployees < ActiveRecord::Migration[5.1]
  def change
    add_reference :employees, :team_lead_id, foreign_key: true
  end
end
