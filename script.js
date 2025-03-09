function addName(name) {
    const main = document.getElementById('Names');
    main.style.display = 'none';
    const cancel = document.getElementById('cancel');
    cancel.style.display = 'flex';
    if (name === 'Trâm') {
        const tramDiv = document.getElementById('Trâm');
        if (tramDiv) {
            tramDiv.style.display = 'flex';
        }
    } else if (name === 'Linh') {
        const LinhDiv = document.getElementById('Linh');
        if (LinhDiv) {
            LinhDiv.style.display = 'flex';
        }
    } else if (name === 'Tiên') {
            const tienDiv = document.getElementById('Tiên');
            if (tienDiv) {
                tienDiv.style.display = 'flex';
            }
    } else if (name === 'Dung') {
            const dungDiv = document.getElementById('Dung');
            if (dungDiv) {
                dungDiv.style.display = 'flex';
            }
    } else if (name === 'Bình') {
            const binhDiv = document.getElementById('Bình');
            if (binhDiv) {
                binhDiv.style.display = 'flex';
            }
    } else if (name === 'PLinh') {
            const phuongLinhDiv = document.getElementById('Phương_Linh');
            if (phuongLinhDiv) {
                phuongLinhDiv.style.display = 'flex';
            }
    } else if (name === 'KLinh') {
            const khanhLinhDiv = document.getElementById('Khánh_Linh');
            if (khanhLinhDiv) {
                khanhLinhDiv.style.display = 'flex';
            }
    } else if (name === 'Thy') {
            const thyDiv = document.getElementById('Thy');
            if (thyDiv) {
                thyDiv.style.display = 'flex';
            }
    } else if (name === 'Mẫn') {
            const manDiv = document.getElementById('Mẫn');
            if (manDiv) {
                manDiv.style.display = 'flex';
            }
    } else if (name === 'Tâm') {
            const tamDiv = document.getElementById('Tâm');
            if (tamDiv) {
                tamDiv.style.display = 'flex';
            }
    } else if (name === 'Ngân') {
            const nganDiv = document.getElementById('Ngân');
            if (nganDiv) {
                nganDiv.style.display = 'flex';
            }
    } else if (name === 'Hà My') {
            const haDiv = document.getElementById('Hà_My');
            if (haDiv) {
                haDiv.style.display = 'flex';
            }
        } else {
            alert('Chúng tôi không quen cô gái này!');
            main.style.display = 'flex';
            cancel.style.display = 'none';
        }
}

function cancel() {
    const video = document.getElementById('mediaContainer');
    video.style.display = 'none';
    const tramDiv = document.getElementById('Trâm');
    if (tramDiv) {
        tramDiv.style.display = 'none';
    }
    const LinhDiv = document.getElementById('Linh');
    if (LinhDiv) {
        LinhDiv.style.display = 'none';
    }
    const tienDiv = document.getElementById('Tiên');
    if (tienDiv) {
        tienDiv.style.display = 'none';
    }
    const dungDiv = document.getElementById('Dung');
    if (dungDiv) {
        dungDiv.style.display = 'none';
    }
    const binhDiv = document.getElementById('Bình');
    if (binhDiv) {
        binhDiv.style.display = 'none';
    }
    const phuongLinhDiv = document.getElementById('Phương_Linh');
    if (phuongLinhDiv) {
        phuongLinhDiv.style.display = 'none';
    }
    const khanhLinhDiv = document.getElementById('Khánh_Linh');
    if (khanhLinhDiv) {
        khanhLinhDiv.style.display = 'none';
    }
    const thyDiv = document.getElementById('Thy');
    if (thyDiv) {
        thyDiv.style.display = 'none';
    }
    const manDiv = document.getElementById('Mẫn');
    if (manDiv) {
        manDiv.style.display = 'none';
    }
    const tamDiv = document.getElementById('Tâm');
    if (tamDiv) {
        tamDiv.style.display = 'none';
    }
    const nganDiv = document.getElementById('Ngân');
    if (nganDiv) {
        nganDiv.style.display = 'none';
    }
    const haDiv = document.getElementById('Hà_My');
    if (haDiv) {
        haDiv.style.display = 'none';
    }
    const cancel = document.getElementById('cancel');
    cancel.style.display = 'none';
    const main = document.getElementById('Names');
    main.style.display = 'flex';
}
