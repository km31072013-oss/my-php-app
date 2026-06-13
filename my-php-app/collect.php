<?php
// SWILL - Приёмник данных
$log_file = 'logs_' . date('Y-m-d') . '.json';
$input = file_get_contents('php://input');

if(!empty($input)) {
    $data = json_decode($input, true);
    $data['received_at'] = date('Y-m-d H:i:s');
    $data['remote_ip'] = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $data['user_agent'] = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
    
    file_put_contents($log_file, json_encode($data, JSON_PRETTY_PRINT) . ",\n", FILE_APPEND | LOCK_EX);
    
    // Опционально: сохранение в отдельные файлы по типу
    if(isset($data['type'])) {
        $type_file = $data['type'] . '_' . date('Y-m-d') . '.json';
        file_put_contents($type_file, json_encode($data, JSON_PRETTY_PRINT) . "\n", FILE_APPEND | LOCK_EX);
    }
}

header('Content-Type: application/json');
echo json_encode(['status' => 'ok']);
?>