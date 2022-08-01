<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'id' => 1,
            'password' => '12345678',
            'name' => 'Tom',
            'email' => 'user1@game.com',
            'created_at' => date("Y-m-d H:i:s"),
        ]);

        DB::table('users')->insert([
            'id' => 2,
            'password' => '12345678',
            'name' => 'John',
            'email' => 'user2@game.com',
            'created_at' => date("Y-m-d H:i:s"),
        ]);

        DB::table('users')->insert([
            'id' => 3,
            'password' => '12345678',
            'name' => 'Andrew',
            'email' => 'seller1@game.com',
            'created_at' => date("Y-m-d H:i:s"),
        ]);

        DB::table('users')->insert([
            'id' => 4,
            'password' => '12345678',
            'name' => 'Tristan',
            'email' => 'seller2@game.com',
            'created_at' => date("Y-m-d H:i:s"),
        ]);

        DB::table('users')->insert([
            'id' => 5,
            'password' => '12345678',
            'name' => 'Admin',
            'email' => 'admin@game.com',
            'created_at' => date("Y-m-d H:i:s"),
        ]);
    }
}
