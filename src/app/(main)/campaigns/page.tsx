import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CampaignsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Campaigns</h2>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Campaign Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Campaign management features coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}