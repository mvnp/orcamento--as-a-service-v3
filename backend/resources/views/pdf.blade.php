<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
    <link href="https://raw.githubusercontent.com/twbs/bootstrap/v4-dev/scss/_print.scss" rel="stylesheet" />
    <style>
        @page {
            margin: 0cm 0cm;
            size: A4;
        }

        @media print {
            html, body {
                width: 210mm;
                height: 297mm;
            }
        }

        @media all {
            /** Define now the real margins of every page in the PDF **/
            body {
                margin-top: 4cm;
                margin-left: 0cm;
                margin-right: 0cm;
                margin-bottom: 2cm;
            }

            /** Define the header rules **/
            header {
                position: fixed;
                top: 0cm;
                left: 0cm;
                right: 0cm;
                height: 3.5cm;

                /** Extra personal styles **/
                background-color: #000;
                color: white;
                text-align: left;
                line-height: 0.7cm;
            }

            /** Define the footer rules **/
            footer {
                position: fixed;
                bottom: 0cm;
                left: 0cm;
                right: 0cm;
                height: 1.5cm;

                /** Extra personal styles **/
                background-color: #6d3503;
                color: white;
                text-align: center;
                line-height: 1.1cm;
            }
            img.w-100 {
                width: 100%;
            }
            p, p>Strong {
                font-size: 11px;
                margin-bottom: 0px;
            }

            .table td, .table th {
                border-top: 0;
                padding: 0;
                vertical-align: middle;
            }
            .infos {
                font-size: 10.5px!important;
                line-height: 19px;
                margin-top: 15px;
            }
            .w-1 {
                width: 7%!important;
                margin-top: 12px!important;
            }
            .w-2 {
                width: 17%!important;
                margin-top: 12px!important;
            }
            .w-10 {
                text-align: right;
                width: 10%!important;
                margin-top: 12px!important;
            }
            .w-100 {
                width: 90%!important;
                margin-top: 12px!important;
            }
            .table-striped tbody tr {
                line-height: 40px;
            }
            .verified {
                background: #28a74547!important;
                margin: 9px;
                padding: 4px 0;
                border-radius: 6px;
                border: 1px dashed #28a745;
            }
            .not-verified {
                background: #dc354547!important;
                margin: 9px;
                padding: 4px 0;
                border-radius: 6px;
                border: 1px dashed #dc3545;
            }
        }
    </style>
    <title>PDF to export</title>
</head>
<body>
    <header>
        <div class="container">
            <table class="table" style="width: 100%">
                <thead>
                    <tr>
                        <td width="30%">
                            <img src="http://cronogramadeobras.com.br:4200/assets/img/logo/clubesuaobra_.png" alt="" class="w-100" />
                        </td>
                        <td width="70%">
                            <table width="100%" class="infos">
                                <thead>
                                    <tr><td class="text-right"><strong>CHECKLIST VISTORIA OBRA: </strong> DATA: 28/05/2022 </td></tr>
                                    <tr><td class="text-right"><strong>PROPRIETÁRIOS: </strong> Marcos Vinicius n Pereira / Sirleii Cristina S. Roberto </td></tr>
                                    <tr><td class="text-right"><strong>TELEFONE: </strong> (48) 99189 3313 / (48) 991026248 </td></tr>
                                    <tr><td class="text-right"><strong>E-MAIL: </strong> contato@axitech.com.br / programadora01@gmail.com </td></tr>
                                    <tr><td class="text-right"><strong>OBRA: </strong> CONDOMINIO CAMBORÉ - RUA PARQUE CATIMBAU LT 08 QD 05 - JAGUARIUNA  </td></tr>
                                </thead>
                            </table>
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
    </header>

    <footer>
        Copyright &copy; <?php echo date("Y"); ?> - CLUBE SUA OBRA
    </footer>

    <div class="container" style="page-break-after: always">
        <table class="table table-striped" style="width: 100%">
            <thead>
                <tr style="border-bottom: 2px double #6a6a6a">
                    <td scope="col" class="w-2"><strong>VERIFICADO</strong></td>
                    <td scope="col"><strong>ITENS VERIFICADOS</strong></td>
                    <td scope="col" class="text-rigth w-10"><strong>DATA</strong></td>
                    {{-- <td scope="col">Last</td>
                    <td scope="col">Handle</td> --}}
                </tr>
            </thead>
            <tbody>
                @foreach ($reports['items'] as $item)
                    <tr>
                        <td scope="row" style="line-height: 16px" class="w-2 text-center">
                            <div class="{{ (($item['status'] == 'nao') ? 'not-verified' : 'verified') }}">
                                {{ $item['status'] == 'nao' ? 'não' : 'sim' }}
                            </div>
                        </td>
                        <td style="line-height: 16px; padding: 16px 0"> {{ $item['name'] }} </td>
                        <td class="text-rigth w-10"> {{ date('d/m/Y', strtotime($item['created_at'])) }} </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
        <table class="table table-striped" style="width: 100%">
            <thead>
                <tr style="border-bottom: 2px double #6a6a6a">
                    <td scope="col" class="w-1"><strong>NUM</strong></td>
                    <td scope="col"><strong>OBSERVAÇÕES</strong></td>
                    <td scope="col" class="text-rigth w-10"><strong>DATA</strong></td>
                    {{-- <td scope="col">Last</td>
                    <td scope="col">Handle</td> --}}
                </tr>
            </thead>
            <tbody>
                @foreach ($reports['observacao'] as $item)
                    <tr>
                        <td scope="row" style="line-height: 16px" class="w-1"> {{ str_pad($item['id'], 4, '0', STR_PAD_LEFT); }} </td>
                        <td style="line-height: 16px; padding: 16px 0"> {{ $item['name'] }} </td>
                        <td class="text-rigth w-10"> {{ date('d/m/Y', strtotime($item['created_at'])) }} </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</body>
</html>
