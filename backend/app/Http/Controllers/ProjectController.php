<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

use App\Models\Project;
use App\Models\ProjectDepartment;
use App\Models\ProjectDepartmentService;
use App\Models\ProjectTask;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::all();
        return Response::json(array('data' => $projects), 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $specifProject = Project::find($id);
            $specifProject['time_of_project'] = Project::getTimeOfProject($id);
            $specifProject['departments'] = ProjectTask::groupTasksByMonth($id);
            return response()->json(['data' => $specifProject], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        //
    }


    /**
     * This method generate a schedule project for a customer.
     * With model integration, it's possible to generate one or various projects schedules.
     *
     * @return \Illuminate\Http\Response
     */
    private function projectGenerator()
    {
        // $projects = Project::all();
        // $exec = Project::generateTasksOfProjects($projects);
        // return Response::json(array('data' => $exec), 200);
    }
}
