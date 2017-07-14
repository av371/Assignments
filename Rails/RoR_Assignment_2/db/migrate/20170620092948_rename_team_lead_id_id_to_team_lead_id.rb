class RenameTeamLeadIdIdToTeamLeadId < ActiveRecord::Migration[5.1]
  def change
  	rename_column :employees, :team_lead_id_id, :team_lead_id
  end
  
end
