
<meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  <h3>Toast Example</h3>
  <p>In this example, we use data-autohide="false" to show the toast by default. You can close it by clicking on the close (x) icon inside the toast header.</p>

  <div class="toast" data-autohide="false">
    <div class="toast-header">
      <strong class="mr-auto text-primary">Toast Header</strong>
      <small class="text-muted">5 mins ago</small>
      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
    </div>
    <div class="toast-body">
      Some text inside the toast body
    </div>
  </div>
</div>

<script>
$(document).ready(function(){
  $('.toast').toast('show');
});
</script>

<div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</body>
</html>


/*this is fr the modal*/
<div class="intro-short-para">
  <div class="shadow-lg p-3 mb-3 bg-white rounded">
  <i class="fas fa-quote-left"></i>Memories are the building blocks of life<br>
  so the best way to save and share is to capture them.<i class="fas fa-quote-right"></i><br>
  If you are a person like that<br>
  KUDOS!<br>
  you are in the right spot!
</div>
</div>