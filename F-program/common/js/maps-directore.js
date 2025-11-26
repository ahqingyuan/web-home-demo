        // 初始化地图
        window.onload = function () {
            // 1. 创建地图实例（参数为地图容器ID）
            const map = new BMap.Map("baidu-map");

            // 2. 设置中心点坐标（替换为你的经纬度）
            const point = new BMap.Point(117.076011, 30.566109); // 示例：经度, 纬度

            // 3. 初始化地图，设置缩放级别（3-19，数字越大越清晰）
            map.centerAndZoom(point, 16);

            // 4. 添加地图控件（缩放、平移等）
            map.addControl(new BMap.NavigationControl()); // 缩放控件
            map.addControl(new BMap.ScaleControl()); // 比例尺控件

            // 5. 添加标记点（标注公司位置）
            const marker = new BMap.Marker(point);
            map.addOverlay(marker);

            // 6. 添加点击标记后的信息窗口
            const infoWindow = new BMap.InfoWindow(`
        <div style="padding:10px;">
            <h3 style="margin:0 0 5px 0;color:#333;">安徽青园集团</h3>
            <p style="margin:0;color:#666;font-size:12px;">安徽省安庆市宜秀区青园农机机电城</p>
        </div>
    `);
            marker.addEventListener("click", function () {
                map.openInfoWindow(infoWindow, point);
            });

            // 7. 允许鼠标滚轮缩放地图
            map.enableScrollWheelZoom(true);
        };
  
