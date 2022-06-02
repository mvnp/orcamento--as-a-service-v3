<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'status',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier() {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims() {
        return [];
    }

    /**
     * The attributes that should be hidden for serialization.
     * Este usuário tem/pode ter vários colunas de endereço
     * @var array
     */
    public function user_addresses() {
        return $this->hasMany(UserAddress::class, 'user_id');
    }

    /**
     * The attributes that should be hidden for serialization.
     * Este usuário tem uma coluna de detalhes
     * @var array
     */
    public function user_details() {
        return $this->hasOne(UserDetails::class, 'user_id');
    }

    /**
     * The attributes that should be hidden for serialization.
     * Este usuário tem uma coluna de dados bancários
     * @var array
     */
    public function user_bankings() {
        return $this->hasOne(UserBanking::class, 'user_id');
    }

    public function company()
    {
        return $this->hasOne(Company::class);
    }

    public function customer()
    {
        return $this->hasOne(Customer::class);
    }

    public function employee()
    {
        return $this->hasOne(Employee::class);
    }

    public function productInventory()
    {
        return $this->hasOne(ProductInventory::class);
    }
}
