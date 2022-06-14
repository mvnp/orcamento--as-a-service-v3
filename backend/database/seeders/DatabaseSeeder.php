<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(20)->create();
        // \App\Models\Report::factory(200)->create();

        $this->call([
        //      RoleSeeder::class,
        //      CustomerSeeder::class,
        //      ProductSeeder::class,
        //      ProductImageSeeder::class,
        ]);
    }
}
