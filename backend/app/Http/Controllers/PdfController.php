<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Barryvdh\DomPDF\Facade\Pdf;

use Exception;

class PdfController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reports = [
            'observacao' => Report::where('type', 'observacao')->get()->toArray(),
            'items' => Report::where('type', 'itens')->get()->toArray(),
        ];

        return view('pdf', compact('reports'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pdf  $pdf
     * @return \Illuminate\Http\Response
     */
    public function show($id = 1)
    {
        $data = [
            'observacao' => Report::where('type', 'observacao')->get()->toArray(),
            'items' => Report::where('type', 'itens')->get()->toArray(),
        ];

        view()->share('reports', $data);
        $pdf = Pdf::loadView('pdf', $data);

        try {
            // download PDF file with download method
            $filename = strtotime("now") . '_pdf_file.pdf';
            return $pdf->download($filename)->save(public_path() . "/reports/$filename");
        }
        catch (\Exception $e) {
            return response()->json(['error' => 'Arquivo não foi gerado.'], 401);
        }
    }
}
