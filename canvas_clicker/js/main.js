function main(){
    var canvas = document.getElementById('canvas1');
    if(!canvas || !canvas.getContext){
        console.log('error : can not load canvas');
        return false;
    }
    var context = canvas.getContext('2d');

    /* イベントリスナーの登録 */
    canvas.addEventListener('click', onClick, false);

    /* マウスクリックを検出したとき動作する関数 */
    function onClick(e){
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        plotDot(x, y, 0, 0);
    }

    /* 点を打つ関数 */
    function plotDot(x, y, marker, color){
        var size = 10;

        /* 色を指定 */
        if(color == 0) color = 'rgb(0, 255, 255)';
        else if(color == 1) color = 'rgb(255, 0, 255)';
        else if(color == 2) color = 'rgb(255, 255, 0)';
        else if(color == 3) color = 'rgb(0, 255, 0)';
        else if(color == 4) color = 'rgb(0, 0, 255)';
        else if(color == 5) color = 'rgb(255, 0, 0)';
        else{
            console.log('error : color is not proper in plotDot');
            return;
        }

        /* マーカーを指定、描画 */
        if(marker == 0) drawCrossDot();
        else if(marker == 1) drawStrokeCircleDot();
        else if(marker == 2) drawFillCircleDot();
        else if(marker == 3) drawStrokeSquareDot();
        else if(marker == 4) drawFillSquareDot();
        else{
            console.log("error : marker is not proper in plotDot");
            return;
        }

        function drawCrossDot(){
            context.beginPath();
            context.strokeStyle = color;
            context.moveTo(x-size/2, y-size/2);
            context.lineTo(x+size/2, y+size/2);
            context.stroke();
            context.moveTo(x-size/2, y+size/2);
            context.lineTo(x+size/2, y-size/2);
            context.stroke();
        }
        function drawStrokeCircleDot(){
            context.beginPath();
            context.strokeStyle = color;
            context.arc(x, y, size/2, 0, Math.PI*2, false);
            context.stroke();
        }
        function drawFillCircleDot(){
            context.beginPath();
            context.fillStyle = color;
            context.arc(x, y, size/2, 0, Math.PI*2, false);
            context.fill();
        }
        function drawStrokeSquareDot(){
            context.beginPath();
            context.strokeStyle = color;
            context.strokeRect(x-size/2, y-size/2, size, size);
        }
        function drawFillSquareDot(){
            context.beginPath();
            context.fillStyle = color;
            context.fillRect(x-size/2, y-size/2, size, size);
        }
    }
}
