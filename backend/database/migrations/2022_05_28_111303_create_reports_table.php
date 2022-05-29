<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('project_id')->constrained();
            $table->string('type', 255);
            $table->string('name', 255);
            $table->text('description');
            $table->string('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reports');
        # DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        # DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
