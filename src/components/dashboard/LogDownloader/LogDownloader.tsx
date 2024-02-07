const LogDownloader = () => {
    const downloadReqLogs = async () => {
        try {
            const res = await fetch('http://localhost:5000/download-all-reqlogs', {
                credentials: "include"
            });
            if (res.status === 403 || res.status === 404) return
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'reqLogs.txt.gz';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading request logs:', error);
        }
    };

    const downloadErrLogs = async () => {
        try {
            const res = await fetch('http://localhost:5000/download-all-errlogs', {
                credentials: "include"
            });
            if (res.status === 403 || res.status === 404) return
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'errLogs.txt.gz';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading error logs:', error);
        }
    };

    return (
        <div>
            <button onClick={downloadReqLogs}>Download Request Logs</button>
            <button onClick={downloadErrLogs}>Download Error Logs</button>
        </div>
    );
};

export default LogDownloader;