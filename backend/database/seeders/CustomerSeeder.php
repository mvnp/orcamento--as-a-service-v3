<?php

namespace Database\Seeders;

use App\Models\Customer;
use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Container\Container;
use Illuminate\Support\Str;

class CustomerSeeder extends Seeder
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
        foreach (range(1, 119) as $index){
            Customer::create([
                'user_id' => (($index)+1)
            ]);

            // Reset
            $this->faker->unique(true);
        }
    }
}
