import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import toast from 'react-hot-toast';

const EmailForm: React.FC = () => {
      const [email, setEmail] = useState('')

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const email = e.target.email.value
        try {
          const response = await fetch('/api/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
          })
          const data = await response.json()
      
          if (data.message) {
            toast.success(data.message)
            setEmail('')
          } else {
            console.error(data, 'ha')
          }
        } catch (error) {
          console.error('Error:', error)
        }
      }
    return (
            <Card className="w-full bg-transparent relative">
              <CardHeader>
                <CardTitle>Be the first to know</CardTitle>
                <CardDescription>
                  Receive updates regarding the project as a newsletter.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Email</Label>
                      <Input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center sm:justify-between">
                  {/* <Button
                    type="button"
                    variant="outline"
                    onClick={() => setEmail('')}
                  >
                    Cancel
                  </Button> */}
                  <Button type="submit">Submit</Button>
                </CardFooter>
              </form>
            </Card>
    );
};

export default EmailForm;