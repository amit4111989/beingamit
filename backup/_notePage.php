<?php
require_once('php/WkHtmlToPdf.php');
// Create a new WKHtmlToPdf object with some global PDF options
$pdf = new WkHtmlToPdf(array(
    'no-outline',         // Make Chrome not complain
    'margin-top'    => 0,
    'margin-right'  => 0,
    'margin-bottom' => 0,
    'margin-left'   => 0,
));

// Set default page options for all following pages
$pdf->setPageOptions(array(
    'disable-smart-shrinking',
    'user-style-sheet' => 'pdf.css',
));

// Add a page. To override above page defaults, you could add 
// another $options array as second argument.
$pdf->addPage('demo.html');

$pdf->send();