  // 微信二维码显示/隐藏功能
        const wechatIcon = document.getElementById('wechat-icon');
        const qrcodeTooltip = wechatIcon.parentElement.querySelector('.qrcode-tooltip');

        wechatIcon.addEventListener('click', (e) => {
            e.preventDefault();
            qrcodeTooltip.classList.toggle('active');
        });