<?php
$json = file_get_contents('php://input');

file_put_contents("body.txt", $json);

// Converts it into a PHP object
$data = json_decode($json);
$payload = $data->payload;
$id = $payload->tour;
$data = getTourRate($id);

$count = $data->count->id;
$rate = $data->avg->rate;
$newRate = $payload->rate;

$result = ($newRate + ($count * $rate)) / ($count + 1);

echo updateRate($id, $result);


function getTourRate($tourID) {
  $curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://admin.giatrinh.com/graphql',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{"query":"query { tour_reviews_aggregated ( filter: { _and: [ { tour: { id: { _eq: '.$tourID.' } } } ] } ){     count {         id     } avg { rate } } }"}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
return $data2->data->tour_reviews_aggregated[0];

}

function updateRate($tourID, $newrate) {

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://admin.giatrinh.com/graphql',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{"query":"mutation { update_tours_item (id: '.$tourID.', data: { average_rate: '.$newrate.' }) { average_rate } }","variables":{}}',
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer nhf4hPTviXOuMoR8SoAHEpc3ZzdKflEV',
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
return 'ok';

}