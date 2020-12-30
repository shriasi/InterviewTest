<?php 

$type = $_GET['tp']; 
if($type=='signup') signup(); 
elseif($type=='login') login(); 
elseif($type=='feed') feed();  

function login() 
{ 
       require 'config.php';  //import config.php
       $json = json_decode(file_get_contents('php://input'), true); 
       $username = $json['username']; $password = $json['password']; 
       $userData =''; $query = "select * from User where username='$username' and password='$password'"; 
       $result= $db->query($query);
       $rowCount=$result->num_rows;
             
        if($rowCount>0)
        {
            $userData = $result->fetch_object();
            $id=$userData->id;
            $userData = json_encode($userData);
            echo '{"userData":'.$userData.'}';
            //check for valid password and the username
            
        }
        else 
        {
            echo '{"error":"Wrong username and password"}';
        }

    
}

//feed = user details as a feed
function feed(){
    
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $id=$json['id'];
    
    $query = "SELECT * FROM User WHERE id=$id ORDER BY id DESC LIMIT 10";
    //select user details from the database
    $result = $db->query($query); 

    $feedData = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $feedData=json_encode($feedData);
    
    //display data as a table
    echo "<table class='table table-bordered table-striped'>";
    echo "<thead>";
        echo "<tr>";
            echo "<th>id</th>";
            echo "<th>Name</th>";
            echo "<th>Username</th>";
            echo "<th>Email</th>";
        echo "</tr>";
    echo "</thead>";
    echo "<tbody>";
    while($row = mysqli_fetch_array($result)){
        echo "<tr>";
            echo "<td>" . $row['id'] . "</td>";
            echo "<td>" . $row['name'] . "</td>";
            echo "<td>" . $row['username'] . "</td>";
            echo "<td>" . $row['email'] . "</td>";
            echo "<td>";    
   
}

}
    
}

?>
