import { ERR_LOGS_DOWNLOAD_URL, REQ_LOGS_DOWNLOAD_URL } from "../../../utils/constant";

const LogDownloader = () => {
    const downloadReqLogs = async () => {
        try {
            const res = await fetch(REQ_LOGS_DOWNLOAD_URL, {
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
            const res = await fetch(ERR_LOGS_DOWNLOAD_URL, {
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