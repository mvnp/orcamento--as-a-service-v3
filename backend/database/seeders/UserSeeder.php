<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Container\Container;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
    * Initialize faker.
    */
    protected $faker;

    /**
    * Create a instance of faker.
    */
    public function __construct() {
        $this->faker = $this->withFaker();
    }

    /**
    * Use a method to attribute object of faker.
    */
    protected function withFaker() {
        return Container::getInstance()->make(Generator::class);
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (range(1, 100) as $index){
            User::create([
                'name' => $this->faker->name(),
                'email' => $this->faker->unique()->safeEmail(),
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'type' => $this->faker->randomElement(['customer', 'partner', 'builder']),
                'is_business' => $this->faker->randomElement(['pessoa_fisica', 'pessoa_juridica']),
                'status' => $this->faker->boolean(),
                'email_verified_at' => now(),
                'remember_token' => Str::random(10),
            ]);

            // Reset
            $this->faker->unique(true);
        }
    }
}
