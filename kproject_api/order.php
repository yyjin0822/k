<?php
header('Access-Control-Allow-Origin: *'); // 또는 '*' 로 모든 출처를 허용할 수 있습니다.
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$host = 'localhost';
$db   = 'kproject';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

// MySQLi 연결
$connection = new mysqli($host, $user, $pass, $db);

if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

$json = file_get_contents('php://input');
$data = json_decode($json, true);

try {
    // 트랜잭션 시작
    $connection->begin_transaction();

    // cart 테이블에 데이터를 저장하는 쿼리 준비
    $stmt = $connection->prepare("INSERT INTO cart (id, cart_menu_name, cart_price, cart_tem, cart_num, phone_number) VALUES (?, ?, ?, ?, ?, ?)");

    foreach ($data['items'] as $item) {
        // bind_param의 매개변수 타입을 올바르게 설정해야 합니다. 예를 들어, 's'는 문자열, 'i'는 정수, 'd'는 실수입니다.
        $stmt->bind_param('isidii', $item['id'], $item['menu_name'], $item['price'], $item['temperature'], $item['quantity'], $data['phoneNumber']);
        $stmt->execute();
    }

    // 모든 쿼리가 성공적으로 실행되었다면, 변경사항을 데이터베이스에 반영
    $connection->commit();

    // 성공 응답 반환
    echo json_encode(['success' => true, 'message' => 'Order placed successfully']);
} catch (Exception $e) {
    // 에러가 발생했다면, 진행중인 모든 변경사항을 롤백
    $connection->rollback();

    // 에러 응답 반환
    echo json_encode(['success' => false, 'message' => 'An error occurred', 'error' => $e->getMessage()]);
} finally {
    // 데이터베이스 연결 종료
    $connection->close();
}
?>
