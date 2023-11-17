<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>option</title>
</head>
<body>
    <?php
        $host = 'localhost';
        $db   = 'kproject';
        $user = 'root';
        $pass = '';
        
        // 연결 생성
        $mysqli = new mysqli($host, $user, $pass, $db);
        
        $select =  "select * from kproject.menu where id =' " . $_GET["id"] . " ' ";
        $array =  mysqli_query($mysqli, $select);
        
        if(isset($_GET["menu_name"])) {
            $menu_name = $mysqli->real_escape_string($_GET["menu_name"]);
            $price = $mysqli->real_escape_string($_GET["price"]);
            $shot = $mysqli->real_escape_string($_GET["shot"]);
            $tem = $mysqli->real_escape_string($_GET["tem"]);
            $num = $mysqli->real_escape_string($_GET["num"]);
            $id = $mysqli->real_escape_string($_GET["id"]);
            $sql = "INSERT INTO kproject.cart (id,cart_menu_name, cart_price, cart_shot, cart_tem, cart_num) VALUES ('$id','$menu_name', '$price', '$shot', '$tem', '$num')";
            $result = mysqli_query($mysqli, $sql);

			if($result != null) {
				echo "<script>alert('장바구니에 담겼습니다.')</script>";
                echo "<script>location.replace('/menu.php')</script>";
			}
		}

    ?>

    


<?php foreach ($array as $row) { ?>
    <form action="option.php" method="get">
    <h1><?=$row['menu_name']?></h1>

    <input type="hidden" name="id" value="<?=$row['id']?>">
    <input type="hidden" name="menu_name" value="<?=$row['menu_name']?>">

    <h2>가격</h2>
    <label><input type="radio" name="price" value=<?=$row['price']?>>가격</label>
    <label><?=$row['price']?></label>
    
    <h2>hot/ice</h2>
    <label><input type="radio" name="tem" value="ice"> ice</label>
    <label><input type="radio" name="tem" value="hot"> hot</label>

    <h2>샷추가</h2>
    <label><input type="radio" name="shot" value=0>샷추가 없음</label>
    <label><input type="radio" name="shot" value=1>1샷추가</label>
    
    <h2>수량</h2>
    <input type="number" name="num" placeholder="수량을 입력하세요">

    <input type="submit" value="담기">
    </form>
<?php } ?>


</body>
</html>