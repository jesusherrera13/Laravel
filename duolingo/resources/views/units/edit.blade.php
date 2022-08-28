@extends('template')

@section('content')
<div class="container">
    <form action="/unit/{{ $unit-> id }}" method="POST">
        
        @csrf
        @method('PUT')
        <input type="hidden" name="language_id" value="{{ session()->get('language_id') }}">
        <input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
        <input type="hidden" name="id" value="{{ $unit-> id }}">

        <div class="d-flex justify-content-between">
            <a href="{{ URL::to('/unit/'.$unit->id) }}" class="btn btn-sm btn-{{ session()->get('language_code') }} mb-3">
                <i class="fas fa-arrow-left me-2"></i>
                {{ $unit->name }}
            </a>
            @if(Auth::check())
                <div class="dropdown">
                    <button class="btn btn-sm btn-{{ session()->get('language_code') }} dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Actions
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <button class="dropdown-item" type="submit">
                            Save
                        </button>
                    </ul>
                </div>
            @endif
        </div>
    
        @if($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
        @endif

        <div class="row">
            
            <div class="col-md-8">
                <h3 class="text-secondary">{{ $unit->name }}</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" name="name" value="{{ old('name', $unit->name) }}">
                </div>
            </div>
        </div>
    </form>
</div>
@stop