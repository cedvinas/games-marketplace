<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserController extends Controller
{
    public function addSellerRole(Request $request){
        $id = $request->all();
        DB::table('users')->where('id',$id)->update(['role' => 'seller']);
        return redirect('/dashboard')->with('success', 'You became a game seller!');
    }

    public function checkRole(Request $request){
        $role = $request->input('role');
        if ($role == 'seller' || $role == 'admin') {
            return Inertia::render('Dashboard');
        }else{
            return redirect('/')->with('error', 'You have to be a seller first!');
        }
    }
}
