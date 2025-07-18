document.addEventListener('DOMContentLoaded', function() {
    // 作品数据
    const portfolioData = {
        photography: [
            { id: 1, src: 'assets/images/photography/1.png', title: '1', description: '静态摄影', category: 'architecture', type: 'image' },
            { id: 2, src: 'assets/images/photography/2.png', title: '2', description: '静态摄影', category: 'portrait', type: 'image' },
            { id: 3, src: 'assets/images/photography/3.png', title: '3', description: '静态摄影', category: 'still-life', type: 'image' },
            { id: 4, src: 'assets/images/photography/4.png', title: '4', description: '静态摄影', category: 'landscape', type: 'image' },
            { id: 5, src: 'assets/images/photography/5.png', title: '5', description: '静态摄影', category: 'architecture', type: 'image' },
            { id: 6, src: 'assets/images/photography/6.png', title: '6', description: '静态摄影', category: 'color-study', type: 'image' },
            { id: 7, src: 'assets/images/photography/7.png', title: '7', description: '静态摄影', category: 'architecture', type: 'image' },
            { id: 8, src: 'assets/images/photography/8.jpg', title: '8', description: '静态摄影', category: 'portrait', type: 'image' },
            { id: 9, src: 'assets/images/photography/9.png', title: '9', description: '静态摄影', category: 'still-life', type: 'image' },
            { id: 10, src: 'assets/images/photography/10.png', title: '10', description: '静态摄影', category: 'landscape', type: 'image' },
            { id: 11, src: 'assets/images/photography/11.png', title: '11', description: '静态摄影', category: 'architecture', type: 'image' },
            { id: 12, src: 'assets/images/photography/15.png', title: '12', description: '静态摄影', category: 'color-study', type: 'image' },
            { id: 13, src: 'assets/images/photography/12.png', title: '13', description: '静态摄影', category: 'landscape', type: 'image' },
            { id: 14, src: 'assets/images/photography/13.png', title: '14', description: '静态摄影', category: 'architecture', type: 'image' },
            { id: 15, src: 'assets/images/photography/14.png', title: '15', description: '静态摄影', category: 'color-study', type: 'image' },
        ],
        films: [
            // 请将这里的 embedSrc 替换为你真实的 Bilibili 视频嵌入链接 (例如：https://player.bilibili.com/player.html?bvid=BV1xxxxxxx&autoplay=0)
            { id: 1, type: 'bilibili', embedSrc: 'https://www.bilibili.com/video/BV1gugczaE2F?vd_source=e4d77113e8a14820331cd07dfbaf0665', poster: 'assets/images/films/1.png', title: '杏杏', description: '实验短片-最佳毕业设计奖' },
            { id: 2, type: 'bilibili', embedSrc: 'https://www.bilibili.com/video/BV1fhu4zEEZh?vd_source=e4d77113e8a14820331cd07dfbaf0665', poster: 'assets/images/films/2.jpg', title: '牙牙的奇妙冒险', description: '羊毛毡定格动画-全国大学生广告大赛二等奖' },
            { id: 3, type: 'bilibili', embedSrc: 'https://www.bilibili.com/video/BV1Lrgcz6EsX?vd_source=e4d77113e8a14820331cd07dfbaf0665', poster: 'assets/images/films/3.jpg', title: '混剪', description: '作品' },
        ],
        vfx: [
            // VFX 仍然使用本地视频，如果需要B站嵌入，请参照films部分修改
            { id: 1, type: 'video', src: 'assets/videos/vfx/1.mp4', poster: 'assets/images/vfx/111.png', title: 'Maya', description: '贴图与灯光' },
            { id: 2, type: 'video', src: 'assets/videos/vfx/2.mp4', poster: 'assets/images/vfx/2.jpg', title: 'AfterEffect', description: '特效' },
            
            
            { id: 4, type: 'video', src: 'assets/videos/vfx/6.mp4', poster: 'assets/images/vfx/6.jpg', title: 'AfterEffect', description: '平面动画' }
        ]
    };

    // 初始化画廊
    function initGallery() {
        renderPhotographyGallery();
        renderFilmsGallery();
        renderVFXGallery();
    }

    // 渲染摄影作品画廊
    function renderPhotographyGallery() {
        const gallery = document.querySelector('#photography .gallery-grid');
        gallery.innerHTML = '';

        portfolioData.photography.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.setAttribute('data-id', item.id);
            
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.title;
            
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            overlay.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
            
            galleryItem.appendChild(img);
            galleryItem.appendChild(overlay);
            gallery.appendChild(galleryItem);
            
            // 为摄影作品添加点击事件，传入整个 item 对象
            galleryItem.addEventListener('click', () => openModal(item));
        });
    }

    // 渲染短片作品画廊 (支持Bilibili嵌入)
    function renderFilmsGallery() {
        const gallery = document.querySelector('#films .video-gallery');
        gallery.innerHTML = '';

        portfolioData.films.forEach(item => {
            const videoItem = document.createElement('div');
            videoItem.className = 'video-item gallery-item'; // 依然使用 gallery-item 样式
            videoItem.setAttribute('data-id', item.id);
            
            // 显示海报图
            const posterImg = document.createElement('img');
            posterImg.src = item.poster;
            posterImg.alt = item.title;
            
            const playIcon = document.createElement('div');
            playIcon.className = 'video-play-icon';
            playIcon.innerHTML = '<i class="fas fa-play"></i>';
            
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            overlay.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
            
            videoItem.appendChild(posterImg);
            videoItem.appendChild(playIcon);
            videoItem.appendChild(overlay);
            gallery.appendChild(videoItem);
            
            // 为视频作品添加点击事件，传入整个 item 对象
            videoItem.addEventListener('click', () => openModal(item));
        });
    }

    // 渲染特效制作画廊 (保留本地视频逻辑)
    function renderVFXGallery() {
        const gallery = document.querySelector('#vfx .mixed-gallery');
        gallery.innerHTML = '';

        portfolioData.vfx.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.setAttribute('data-id', item.id);
            
            if (item.type === 'image') {
                const img = document.createElement('img');
                img.src = item.src;
                img.alt = item.title;
                galleryItem.appendChild(img);
                
                // 添加点击事件
                galleryItem.addEventListener('click', () => openModal(item));
            } else { // 假设为本地视频
                const video = document.createElement('video');
                video.poster = item.poster;
                video.innerHTML = `<source src="${item.src}" type="video/mp4">您的浏览器不支持视频播放`;
                video.controls = false;
                
                const playIcon = document.createElement('div');
                playIcon.className = 'video-play-icon';
                playIcon.innerHTML = '<i class="fas fa-play"></i>';
                
                galleryItem.appendChild(video);
                galleryItem.appendChild(playIcon);
                
                // 为本地视频添加点击事件
                galleryItem.addEventListener('click', () => playVideo(galleryItem, video, item.src, `${item.title} - ${item.description}`));
            }
            
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            overlay.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
            
            galleryItem.appendChild(overlay);
            gallery.appendChild(galleryItem);
        });
    }

    // 选项卡切换功能
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 移除所有活动状态
            tabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // 添加当前活动状态
            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // 媒体模态框功能
    const modal = document.getElementById('image-modal');
    const modalMediaContainer = document.getElementById('modal-media-container'); // 新的媒体容器
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

    function openModal(item) {
        modal.style.display = 'block';
        captionText.textContent = `${item.title} - ${item.description}`;

        // 清除之前模态框中的内容
        modalMediaContainer.innerHTML = '';

        if (item.type === 'image') {
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.title;
            img.className = 'modal-media'; // 添加样式类
            modalMediaContainer.appendChild(img);
        } else if (item.type === 'bilibili') {
            const iframe = document.createElement('iframe');
            iframe.src = item.embedSrc;
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');
            iframe.className = 'modal-media'; // 添加样式类
            // 为了B站视频的响应式，可以设置宽高并保持比例
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            // iframe.style.aspectRatio = '16 / 9'; // 如果需要强制16:9比例
            modalMediaContainer.appendChild(iframe);
        }
        // 如果有其他视频类型（如Vimeo，YouTube），可以在这里添加更多条件
    }

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        // 停止B站视频播放（通过重新加载iframe来停止，否则会继续播放背景音）
        modalMediaContainer.innerHTML = '';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            // 停止B站视频播放
            modalMediaContainer.innerHTML = '';
        }
    });

    // 视频播放功能 (仅用于本地视频，Bilibili嵌入视频不需要此功能)
    function playVideo(container, videoElement, src, caption) {
        // Hide the play icon and overlay immediately upon click
        const playIcon = container.querySelector('.video-play-icon');
        const overlay = container.querySelector('.overlay');
        if (playIcon) playIcon.style.display = 'none';
        if (overlay) overlay.style.display = 'none';

        videoElement.controls = true;
        videoElement.play();
        
        // Listen for video ending to show controls/icon again
        videoElement.addEventListener('ended', () => {
            videoElement.controls = false;
            if (playIcon) playIcon.style.display = 'flex'; // Show play icon
            if (overlay) overlay.style.display = 'flex'; // Show overlay
        });

        // Add event listener for when video is paused manually
        videoElement.addEventListener('pause', () => {
            videoElement.controls = false;
            if (playIcon) playIcon.style.display = 'flex'; // Show play icon
            if (overlay) overlay.style.display = 'flex'; // Show overlay
        });
    }

    // 初始化画廊
    initGallery();
});