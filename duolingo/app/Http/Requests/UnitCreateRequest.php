<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UnitCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|unique:units,name,null,id,language_id,'.session()->get('language_id').'|min:2|max:255',
            'language_id' => 'required',
            'user_id' => 'required',
        ];
    }
}
