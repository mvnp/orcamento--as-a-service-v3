<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectTask extends Model
{
    use HasFactory;

    public $timestamps = true;

    protected $fillable = [
        "project_id",
        "project_department_id",
        "project_department_service_id",
        "description_of_service",
        "percent_of_department",
        "percent_of_service",
        "total_amount_task",
        "status_partner_ended",
        "status_customer_ended",
        "date_request_payment",
        "date_task_executed"
    ];

    public static function groupTasksByMonth($project){

        $project_amount = Project::select("amount")->find($project)["amount"];
        $departments = ProjectDepartment::orderBy('id', 'asc')->get();

        foreach ($departments as $dep):
            $dep['tasks'] = ProjectDepartmentService::where("project_department_id", $dep->id)->get();
            foreach ($dep['tasks'] as $service):
                $service['months'] = ProjectTask::where([
                    "project_id" => $project,
                    "project_department_service_id" => $service->id
                ])->with('accomplisheds')->get();
            endforeach;
        endforeach;

        return $departments;
    }

    public static function groupTasksByMonthPerService($project_id) {
        $tasks = ProjectDepartmentService::get();
        foreach ($tasks as $task):
            $task['months'] = ProjectTask::where([
                'project_department_id' => $task->project_department_id,
                'project_id' => $project_id,
            ])->get();
        endforeach;

        return $tasks;
    }

    public function tasks(){
        return $this->belongsTo(ProjectDepartmentService::class);
    }

    public function accomplisheds() {
        return $this->hasOne(ProjectAccomplished::class);
    }
}
