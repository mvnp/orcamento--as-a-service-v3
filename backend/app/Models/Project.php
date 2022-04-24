<?php

namespace App\Models;

use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    /**
     * This method generate a schedule project for a customer.
     * With model integration, it's possible to generate one or various projects schedules.
     *
     * @return void
     */
    // public static function generateTasksOfProjects($projects)
    // {
    //     $departments = ProjectDepartment::with('services')->get();
    //     $saveProject = new ProjectTask;

    //     foreach ($projects as $project) {
    //         $months_of_project = CarbonPeriod::create($project->started_at, '1 month', $project->ended_at);
    //         foreach ($departments as $dep) {
    //             foreach ($dep->services as $service) {
    //                 foreach ($months_of_project as $month)
    //                 {
    //                     $ins = [
    //                         "project_id" => $project->id,
    //                         "project_department_id" => $dep->id,
    //                         "project_department_service_id" => $service->id,
    //                         "description_of_service" => trim($service->description),
    //                         "percent_of_department" => $dep->percent,
    //                         "percent_of_service" => $service->percent,
    //                         "total_amount" => $project->amount,
    //                         "total_amount_task" => (($project->amount) * ($dep->percent / 100)),
    //                         "status_partner_ended" => false,
    //                         "status_customer_ended" => false,
    //                         "date_task_executed" => $month->format("Y-m-d 12:00:00"),
    //                         "date_request_payment" => Carbon::now(),
    //                     ];

    //                     $saveProject->create($ins);
    //                 }
    //             }
    //         }
    //     }
    // }

    public static function getTimeOfProject($project_id) {
        $months = [];
        $project = Project::find($project_id);
        $result = CarbonPeriod::create($project->started_at, '1 month', $project->ended_at);

        foreach ($result as $dt):
            $months[] = $dt->format("Y-m-d");
        endforeach;
        return $months;
    }

    public function projectTasks() {
        return $this->hasMany(ProjectTask::class, 'project_id', 'id');
    }
}
