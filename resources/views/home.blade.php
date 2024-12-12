<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Chairman Foam</title>
        <meta name="csrf-tocken" content="{{csrf_token()}}">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
        <link rel="stylesheet"type="text/css" href="{{asset('css/app.css')}}">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"/>
        <link href="{{asset('css/toggle-switch.css')}}" rel="stylesheet" />
        <link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}" >
    </head>
    <body>
    <div >
            <div id="root">

            </div>

        </div>
        <script type="text/javascript" src ="{{asset('js/home/app.js')}}"></script>
        <script src="{{asset('js/popper.min.js')}}" ></script>
        <script src="{{asset('js/jquery-3.4.1.slim.min.js')}}" ></script>
        <script src="{{asset('js/bootstrap.min.js')}}" ></script>
        <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </body>
</html>
