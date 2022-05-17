<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateBudgetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('budgets', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('project_id')->constrained();
            $table->foreignId('partner_id')->constrained();
            $table->foreignId('budget_category_id')->constrained();
            $table->string('subject');
            $table->text('description');
            $table->text('pdf_proposal');
            $table->double('price_accepted', 8, 2);
            $table->boolean('accepted')->default(false);
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
        Schema::dropIfExists('budgets');
        # DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        # DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
