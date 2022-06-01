<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Intervention\Image\ImageManagerStatic as Image;
use App\Models\ProjectGallery;
use Exception;

class ProjectGalleryController extends Controller
{
    protected $model;

    public function __construct(ProjectGallery $model)
    {
        $this->model = $model;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $images = $request->file('images');
        $obj = [];

        foreach ($images as $image)
        {
            $original_extension = $image->getClientOriginalExtension();
            $original_filename = time().'_'.sha1($image->getClientOriginalName()).'.'.$original_extension;

            $image->storeAs('gallery', $original_filename, 'public');

            $source = storage_path("app/public/gallery/$original_filename");
            $target = storage_path("app/public/gallery/thumbs/$original_filename");

            if(File::exists($source)) {

                Image::make($source)->fit(300, 250)->save($target);

                $obj = [
                    'project_id' => $id ?? 1,
                    'image' => "gallery/$original_filename",
                    'thumb' => "gallery/thumbs/$original_filename",
                    'legend' => 'Default legend for this image.',
                    'status' => true
                ];

                $this->model::create($obj);
            }
        }

        return response()->json(['data' => 'As fotos do projeto foram salvas com sucesso.']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProjectGallery  $projectGallery
     * @return \Illuminate\Http\Response
     */
    public function show($id, Request $request)
    {
        try {
            $photos = $this->model->where('project_id', $id)->orderBy('id', 'desc')->get();

            if(count($photos) > 0 || throw new Exception("Não foi possível carregar as fotos do projeto.", 401)) {
                return response()->json(['data' => $photos], 200);
            }
        }
        catch (Exception $e) {
            return response()->json(['data' => $e->getMessage()], 401);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProjectGallery  $projectGallery
     * @return \Illuminate\Http\Response
     */
    public function edit(ProjectGallery $projectGallery)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProjectGallery  $projectGallery
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProjectGallery $projectGallery)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProjectGallery  $projectGallery
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProjectGallery $projectGallery)
    {
        //
    }
}
