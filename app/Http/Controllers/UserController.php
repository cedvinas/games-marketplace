<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserController extends Controller
{
    public function addSellerRole(Request $request)
    {
        $id = $request->all();
        DB::table('users')->where('id', $id)->update(['role' => 'seller']);
        return redirect('/')->with('success', 'You became a game seller!');
    }


    public function dashboard()
    {
        return Inertia::render('Dashboard');
    }

    public function orderHistory(int $id)
    {
        if (Auth::user()->id === $id) {
            $orders = User::find($id)->orders;
            foreach ($orders as $order) {
                $order['games'] = json_decode($order['games']);
            }

            return Inertia::render('OrderHistory', ['orders' => $orders]);
        } else {
            return redirect('/')->with('error', 'Wrong user ID!');
        }
    }
}
