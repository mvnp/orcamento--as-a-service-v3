<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Bare - Start Bootstrap Template</title>
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="{{ url('css/styles.css') }}" rel="stylesheet" />
        <link href="{{ url('css/custom.css') }}" rel="stylesheet" />
    </head>
    <body>
        <!-- Responsive navbar-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Page content-->
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="mt-5">Amount of Project: {{ $amount_of_project }}</h1><hr>
                    <table class="table table-striped table-hover table-responsive">
                        <thead>
                            <tr>
                                <th> ID_DEP </th>
                                <th> ID_SERV </th>
                                <th> DESCRICAO </th>
                                <th> PAGAR </th>
                                <th> PERC_DEP </th>
                                <th> VALOR_DEP </th>
                                <th> PERC_SERV </th>
                                <th> VALOR_SERV </th>
                                @foreach ($what_months_have as $month)
                                    <th> {{ $month }} </th>
                                @endforeach
                                <th> -- VALOR TOTAL -- </th>
                            </tr>
                        </thead>
                        @foreach ($departments as $dep)
                            <tbody>
                                <tr>
                                    <th> {{ $dep->id }} </th>
                                    <th> </th>
                                    <td style="min-width:400px; white-space: pre-line"> {{ $dep->description }} </td>
                                    <td> </td>
                                    <td> {{ $dep->percent }} </td>
                                    <td> @convert(((($amount_of_project)*$dep->percent)/100) ) </td>
                                    <td colspan="15"> </td>
                                    <td> -- VALOR TOTAL -- </td>
                                </tr>
                                @foreach ($dep->services as $services)
                                    <tr>
                                        <td> </td>
                                        <td> {{ $services->id }} </td>
                                        <td style="min-width:400px; white-space: pre-line"> {{ $services->description }} </td>
                                        <td> <button class="btn btn-danger btn-sm">Pagar</button> </td>
                                        <td> </td>
                                        <td> </td>
                                        <td> {{ $services->percent }} </td>
                                        <td> @convert((((($amount_of_project)*$dep->percent)/100)*(($services->percent)/100))) </td>
                                        @foreach($services->tasks as $tasks)
                                            <td data-info="{{ $tasks->id }}"> {{ $tasks->total_amount_to_pay }} </td>
                                        @endforeach
                                        <td> -- VALOR TOTAL -- </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        @endforeach
                        <tfoot>
                            <tr>
                                <th> ID_DEP </th>
                                <th> ID_SERV </th>
                                <th> DESCRICAO </th>
                                <th> PAGAR </th>
                                <th> PERC DEP </th>
                                <th> VALOR DEP </th>
                                <th> PERC SERV </th>
                                <th> VALOR SERV </th>
                                @foreach ($what_months_have as $month)
                                    <th> {{ $month }} </th>
                                @endforeach
                                <th> -- VALOR TOTAL -- </th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
        <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Core theme JS-->
        <script src="{{ url('js/scripts.js') }}"></script>
    </body>
</html>
