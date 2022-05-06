<?php

namespace App\Http\Controllers;

use App\Models\Partner;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class PartnerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $partner = Partner::with('user')->get();
            return Response::json(array('data' => $partner), 200);

            throw new Exception("Erro ao tentar carregar os parceiros. Atualize a págiona ou entre em contato com administrador.", 1);
        }
        catch (\Exception $e) {
            return Response::json(array('error' => $e->getMessage()), 401);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Partner  $partner
     * @return \Illuminate\Http\Response
     */
    public function show($partner)
    {
        try {
            $showPartner = Partner::with('user', 'user.user_address', 'user.user_details', 'user.user_banking')->find($partner);
            return Response::json(array('data' => $showPartner), 200);

            throw new Exception("Não foi possível buscar o parceiro. Atualize a página ou contacte o administrador.", 1);
        }
        catch (\Exception $e) {
            return Response::json(array('error' => $e->getMessage()), 200);
        }

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Partner  $partner
     * @return \Illuminate\Http\Response
     */
    public function edit(Partner $partner)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Partner  $partner
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Partner $partner)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Partner  $partner
     * @return \Illuminate\Http\Response
     */
    public function destroy(Partner $partner)
    {
        //
    }
}
