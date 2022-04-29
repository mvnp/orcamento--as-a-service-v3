<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProjectAccomplished;
use App\Models\ProjectTask;

class ProjectAccomplishedController extends Controller
{
    private $requestPayment;

    public function __construct(ProjectAccomplished $requestPayment) {
        $this->requestPayment = $requestPayment;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $accomplisheds = ProjectAccomplished::with('task')->where('project_id', 118)->get();
            return response()->json(['data' => $accomplisheds], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
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
        $task = new ProjectTask;

        try {
			$requestPay = $request->all();
			$pay = $this->requestPayment->create($requestPay);

            if($pay) {
                $payment = [
                    'total_amount_to_pay' => $request->total_amount,
                    'status_partner_ended' => true
                ];
                $task::where('id', $request->project_task_id)->update($payment);
                return response()->json(['data' => 'A solicitação de pagamento foi enviada com sucesso.'], 201);
            }
		} catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()]);
		}
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProjectAccomplished  $projectAccomplished
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProjectAccomplished  $projectAccomplished
     * @return \Illuminate\Http\Response
     */
    public function edit(ProjectAccomplished $projectAccomplished)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProjectAccomplished  $projectAccomplished
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProjectAccomplished $projectAccomplished)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProjectAccomplished  $projectAccomplished
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProjectAccomplished $projectAccomplished)
    {
        //
    }
}
