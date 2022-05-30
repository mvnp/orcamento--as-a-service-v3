<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;

use Exception;

class ReportController extends Controller
{
    protected $model;

    public function __construct(Report $model)
    {
        $this->model = $model;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if(!$request->report_id)
            return response()->json(['error' => "Envie o id do relatório."], 401);

        try {
            $report = $this->model->find($request->report_id);

            if($report || throw new Exception("Envie o id do relatório correto.", 401)):
                return response()->json(['data' => $report], 200);
            endif;
        }
        catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pdf  $pdf
     * @return \Illuminate\Http\Response
     */
    public function generate($id = 1)
    {
        $data = [
            'observacao' => Report::where('type', 'observacao')->get()->toArray(),
            'items' => Report::where('type', 'verificacao')->get()->toArray(),
        ];

        view()->share('reports', $data);
        $pdf = Pdf::loadView('pdf', $data);

        try {
            // download PDF file with download method
            $filename = strtotime("now") . '_pdf_file.pdf';
            $pdf->save(public_path() . "/reports/$filename");
            return $pdf->download($filename);
            // $this->redirect('/order.pdf');
        }
        catch (\Exception $e) {
            return response()->json(['error' => 'Arquivo não foi gerado.'], 401);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($project_id, Request $request)
    {
        $data = [];

        try {
            switch ($request->type) {
                case 'observacao':
                    $data = Report::where(['type' => 'observacao', 'project_id' => $project_id])->get();
                    break;
                case 'verificacao':
                    $data = Report::where(['type' => 'verificacao', 'project_id' => $project_id])->get();
                    break;
                default:
                    $data = Report::where(['project_id' => $project_id])->get();
                    break;
            }

            return response()->json(['data' => $data], 200);
        }
        catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }

    public function destroy($id)
    {
        try {
            if($this->model->destroy($id) || throw new Exception()) {
                return response()->json(['data' => 'O relatório foi removido com sucesso!'], 200);
            }
		}
        catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
		}
    }
}
