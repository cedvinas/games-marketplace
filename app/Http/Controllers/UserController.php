<?php

namespace App\Http\Controllers;

use App\Models\ListedGame;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserController extends Controller
{
    public function addSellerRole(Request $request){
        $id = $request->all();
        DB::table('users')->where('id',$id)->update(['role' => 'seller']);
        return redirect('/')->with('success', 'You became a game seller!');
    }

    public function checkRole(Request $request){
        $role = $request->input('role');
        if ($role == 'seller' || $role == 'admin') {
            return Inertia::render('Dashboard');
        }else{
            return redirect('/')->with('error', 'You dont have a permission to enter dashboard!');
        }
    }

    
}
